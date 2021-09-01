import createStripe from 'stripe-client';

const stripe = createStripe(
  'pk_test_51IQRoKKcJhRNpWOmwJoJv97D4UaJdMcw3lGgDnczaAU5Ai6HGVu3FO112nR7GI2pzMT85eHUrcdh0hb2oBpGTGLk00L4KRDZ8G',
);

export const cardTokenRequest = card => stripe.createToken({card});
