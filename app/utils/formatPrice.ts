export const formatPrice = (price: number): string => {
  if (typeof price !== 'number' || isNaN(price)) {
    return '۰ تومان'
  }
  
  return `${new Intl.NumberFormat('fa-IR').format(price)} تومان`
}