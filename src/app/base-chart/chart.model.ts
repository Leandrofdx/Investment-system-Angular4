class Order {
  constructor(
    public id: number,
	public name: string,
	public buy: number,
	public variation: number,
    public orderItems: OrderItem[] = [],
  ){}
}

class OrderItem {
  constructor(public orderItems){
  	
  }
}

export {Order, OrderItem}