// import { NextFunction, Response, Request } from 'express';

export default function productsValidation(productsIds: number[]) {
  if (!productsIds) {
    return { error: { status: 400, message: '"productsIds" is required' } };
  }
  if (!Array.isArray(productsIds)) {
    return { error: { status: 422, message: '"productsIds" must be an array' } };
  }
  if (productsIds.find((id) => typeof id !== 'number')) {
    return { error: { status: 422, message: '"productsIds" must include only numbers' } };
  }
//   const order = req.body;
//   if (!order.productsIds) {
//     return res.status(400).json({ message: '"productsIds" is required' });
//   }
//   //   Não sei se isso aqui vai dar certo 
//   if (!Array.isArray(order.productsIds)) {
//     return res.status(422).json({ message: '"productsIds" must be an array' });
//   }
//   //   talvez não precise da posição do array pra funcionar
//   if (order.productsIds[0].length < 1) {
//     return res.status(422).json({ message: '"productsIds" must include only numbers' });
//   } 
//   next();
}