import { Request, Response } from 'express';
import { ContactController } from "../controllers/Controller";

export class Routes {
    public contactController: ContactController = new ContactController();
    public routes(app): void {
        app.route('/contact') 
            .get(this.contactController.getAllContacts)
            .post(this.contactController.addNewContact);
           
        app.route('contact/:contactId')
            .get(this.contactController.getContactWithId)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact)
    }
}