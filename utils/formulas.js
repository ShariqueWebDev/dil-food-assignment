export const getDiscountPercentage = (sellPrice, oriPrice) =>{
    const discount = oriPrice - sellPrice;
    return ((discount/oriPrice) * 100).toFixed(2)
}