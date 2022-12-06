import snakeize from 'snakeize';
import { z } from 'zod';

const productsSchema = z
  .array(
    z.number(),
    snakeize({
      required_error: '"productsIds" is required',
      invalid_type_error: '"productsIds" must be an array',
    }),
  )
  .min(1, '"productsIds" must include only numbers');

const validateProducts = (products: number[]) => {
  const parse = productsSchema.safeParse(products);

  if (!parse.success) {
    const { code, message } = parse.error.issues[0];

    return {
      error: {
        code,
        status: message.includes('required') ? 400 : 422,
        message,
      },
      success: parse.success,
    };
  }

  return {
    error: null,
    success: parse.success,
  };
};

export default validateProducts;