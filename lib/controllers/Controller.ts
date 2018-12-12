import * as mongoose from 'mongoose';
import { ContactSchema } from '../models/Model';
import { Request, Response } from 'express';

const Contact = mongoose.model('Contact', ContactSchema);

export class ContactController {

    public getAllContacts(req: Request, res: Response) {
        Contact.find({}, (err, contact) => {
            err && res.send(err);
            res.json(contact);
        })
    }

    public getContactWithId(req: Request, res: Response) {
        Contact.findById(req.params.contactId, (err, contact) => {
            err && res.send(err);
            res.json(contact);
        })
    }

    public addNewContact(req: Request, res: Response) {
        const newContact = new Contact(req.body);

        newContact.save((err, contact) => {
            err && res.send(err);
            res.json(contact);
        })
    }

    public updateContact(req: Request, res: Response) {
        Contact.findAndUpdate({ _id: req.params.contactId }, 
            req.body, {new: true}, (err, contact) => {
                err && res.send(err);
                res.json(contact)
            })
    }

    public deleteContact(req: Request, res: Response) {
        Contact.remove({ _id: req.params.contactId }, (err, contact) => {
            err && res.send(err);
            res.json(contact);
        })
    }
}