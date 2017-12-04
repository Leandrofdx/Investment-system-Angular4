import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'


export class ClassError {
	static classError (error: HttpErrorResponse | any) {
		let errorMessage: string

		if(error instanceof HttpErrorResponse) {
			errorMessage = `Error ${error.status} ao acessar o URL ${error.url} - ${error.error.statusText}`
		} else {
			errorMessage = error.toString()
		}
		console.log(errorMessage)
		return Observable.throw(errorMessage)
		
	}
}