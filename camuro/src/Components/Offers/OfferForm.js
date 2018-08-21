import React, {Component} from 'react'
import ReactContactForm from 'react-mail-form'
import axios from 'axios'
import SelectUSState from 'react-select-us-states'
import $ from "jquery"
import ItemForm from './ItemForm'

class OfferForm extends Component {
  state = {
    activeField: null,
    invalidFields: [],
    items: [{
      item:[
        {
          price: '',
          model: '',
          condition: ''
        }
      ]
    }]
  }


  handleAddItem = () => {

    this.setState({
       items: this.state.items.concat([{ model: '' , condition: '', price: ''}])
     });
  }

  removeItem = (index) => {
    const items = this.state.items.slice()
    items.splice(index, 1)
    this.setState({
      items: items
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const state = document.getElementById('state').value
    const model = document.getElementsByClassName('model')[0].value
    const condition = document.getElementsByClassName('condition')[0].value
    const price = document.getElementsByClassName('price')[0].value

    const item1 = `model: ${model} \n condition: ${condition} \n price: ${price}`
    const items = []
    items.push(item1)

    if (this.state.items.length > 1) {
      const model2 = document.getElementsByClassName('model')[1].value
      const condition2 = document.getElementsByClassName('condition')[1].value
      const price2 = document.getElementsByClassName('price')[1].value
      const item2 = `model: ${model2} \n condition: ${condition2} \n price: ${price2}`
      alert(item2)
      items.push(item2)
    }
    if (this.state.items.length > 2) {
      const model3 = document.getElementsByClassName('model')[2].value
      const condition3 = document.getElementsByClassName('condition')[2].value
      const price3 = document.getElementsByClassName('price')[2].value
      const item3 = `model: ${model3} \n condition: ${condition3} \n price: ${price3}`
      alert(item3)
      items.push(item3)
    }
    if (this.state.items.length > 3) {
      const model4 = document.getElementsByClassName('model')[3].value
      const condition4 = document.getElementsByClassName('condition')[3].value
      const price4 = document.getElementsByClassName('price')[3].value
      const item4 = `model: ${model4} \n condition: ${condition4} \n price: ${price4}`
      alert(item4)
      items.push(item4)
    }
    if (this.state.items.length > 4) {
      const model5 = document.getElementsByClassName('model')[4].value
      const condition5 = document.getElementsByClassName('condition')[4].value
      const price5 = document.getElementsByClassName('price')[4].value
      const item5 = `model: ${model5} \n condition: ${condition5} \n price: ${price5}`
      items.push(item5)
    }

    const invalidFields = []
    if (!email || email.length < 1) { invalidFields.push('email') }
    if (!name || name.length < 1) { invalidFields.push('name') }
    if (!model || model.length < 1) { invalidFields.push('model') }
    if (!price || price.length < 1) { invalidFields.push('price') }

    this.setState({
      invalidFields: invalidFields
    })

    if (invalidFields.length > 0) { return false }

    const message = items
    $.post('/sendEmail', {
          name: name,
          email: email,
          state: state,
          message: message
        }
    ).done((data)=>{
        if(data.success){
            alert("Thanks for the message! We'll get back to you.")
            this.resetForm()
        }else{
            alert("Message failed to send.")
            this.resetForm()
        }
    })
  }

  inputActive = (field) => {
    const currentState = this.state.active
    this.setState({ activeField: field})
  }

  inputClass = (field) => {
    let fieldClasses = []
    // Check to see if field is currently active
    if (this.state.activeField === field) {
      fieldClasses.push('active')
    }
    // Check if field is in array of invalid fields
    if (this.state.invalidFields.indexOf(field) !== -1) {
      fieldClasses.push('error')
    }

    return fieldClasses.join(' ')
  }

  resetForm(){
    document.getElementById('contact-form').reset()
  }

  render(){
    const LastItem = () => {
      if (this.state.items.length > 1) {
        return <a className="remove-last"onClick={() => this.removeItem(this.state.items.last)}>Remove Last Item</a>
      }
      else {
        return null
      }
    }

    const AddItem = () => {
      if (this.state.items.length < 5){
        return <button className="add-items" type="button" onClick={this.handleAddItem}>Add Item</button>
      }
      else {
        return <p className="addItemText"> You have reached the maximum number of items. Please fill out the form again to add more.</p>
      }
    }
    return(
      <div className="sell-content">
        <div className="sell-form-content">
          <h3>Get An Offer</h3>
          <form className="sell-form" id="contact-form" onSubmit={this.handleSubmit} method="POST">
            <div className="form-group">
              <label for="name">NAME</label>
              <input type="name" className={this.inputClass('name')} id="name" aria-describedby="customerName" onClick={() => this.inputActive("name")}/>
            </div>
            <div className="form-group">
              <label for="email">EMAIL</label>
              <input type="email" className={this.inputClass('email')} id="email" aria-describedby="emailHelp" onClick={() => this.inputActive("email")}/>
            </div>
            <div className="form-group">
              <label for="state">STATE</label>
              <SelectUSState id="state" className="myClassName"/>
            </div>
            <div>
              {this.state.items ?
                this.state.items.map((item, index) =>
                  <ItemForm inputClass={this.inputClass} inputActive={this.inputActive} index={index} item={item} removeItem={this.removeItem}/>
                )
              : null }
            </div>
            <AddItem />
            <LastItem />
            <button type="submit" className="btn btn-primary">Get Offer</button>
          </form>
        </div>
      </div>
    )
  }
}

export default OfferForm
