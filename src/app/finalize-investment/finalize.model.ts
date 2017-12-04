 class Finalize {
 	constructor(
 		public name: string,
 		public email: string,
 		public emailConfirmation: string,
 		public payment: string,
 		public FinalizeItem: any[] = [],
 		public id?: number
 		
 		) {

 	}
}

class FinalizeItem {
	constructor (public id: number, public name: string, public buy: number, public quantity: number) {

	}
}

export {Finalize, FinalizeItem}