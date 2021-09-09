import * as mongoose from "mongoose"

export interface IUserModel extends mongoose.Document {
    name: string;
    avatar: string;
    userid: string;
    eMail: string;
    signature: string;
    title: string;
    group: string;
    notifyCount: number;
    unreadCount: number;
    country: string;
    access: string;
    address: string;
    phone: string;
    password: string;
    login: string;
}

const Schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            required: true,
        },
        userid: {
            type: String,
            required: true,
        },
        eMail: {
            type: String,
            required: true,
        },
        signature: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        group: {
            type: String,
            required: true,
        },
        notifyCount: {
            type: Number,
            required: true,
        },
        unreadCount: {
            type: Number,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        access: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        login: {
            type: String,
            required: true,
        },
    },
);

const User = mongoose.model<IUserModel>('User', Schema, 'user', true);

export { User };