const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_dyZG4GWk6QNZskjELkksDFUz'
  : 'pk_test_mCEweHQuQFq2m30Rt1zul21Y';

export default STRIPE_PUBLISHABLE;
