import React, {Component} from 'react'
import ReactContactForm from 'react-mail-form'
import axios from 'axios'
import SelectUSState from 'react-select-us-states'
import $ from "jquery";

class OfferForm extends Component {
  state = {
    activeField: null,
    invalidFields: []
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const state = document.getElementById('state').value
    const model = document.getElementById('model').value
    const condition = document.getElementById('condition').value
    const price = document.getElementById('price').value

    const invalidFields = []
    if (!email || email.length < 1) { invalidFields.push('email') }
    if (!name || name.length < 1) { invalidFields.push('name') }
    if (!model || model.length < 1) { invalidFields.push('model') }
    if (!price || price.length < 1) { invalidFields.push('price') }

    this.setState({
      invalidFields: invalidFields
    })

    if (invalidFields.length > 0) { return false }

    const message = `state: ${state} \n model: ${model} \n condition: ${condition} \n price: ${price}`
    $.post('/sendEmail', {
          name: name,
          email: email,
          message: message
        }
    ).then((response)=>{
        if (response.data.msg === 'success'){
            alert("Message Sent.")
            this.resetForm()
        }else if(response.data.msg === 'fail'){
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
            <div className="form-group item price">
              <label for="price">ASKING PRICE</label>
              <span>$</span>
              <input type="number" className={this.inputClass('price')} id="price" onClick={() => this.inputActive("price")}/>
            </div>
            <div className="form-group item">
              <label for="modelName">MODEL</label>
              <input type="text" className={this.inputClass('model')} id="model" onClick={() => this.inputActive("model")}/>
            </div>
            <div className="form-group item">
              <label>ITEM CONDITION</label>
              <select id="condition" placeholder="Select item description">
                <option>Like New</option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Well Used</option>
                <option>Heavily Used</option>
                <option>Faulty</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Get Offer</button>
          </form>
        </div>
      </div>
    )
  }
}

export default OfferForm
