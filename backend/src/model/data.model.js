import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    date: {
        type: String, // Aap Date type bhi use kar sakte hain agar format consistent ho
        required: true
    },
    particulars: {
        type: String,
        required: true // Jaise "FunFresh 2x", "Nike bottl", "Deto (white)" waghera
    },
    folio: {
        type: String,
        default: "" // Folio column ya tick/dash ke liye
    },
    debit: {
        type: Number,
        required: true // Debit amount
    },
    credit: {
        type: Number,
        required: true // Credit amount
    },
    drOrCr: {
        type: String,
        enum: ['Dr', 'Cr', ''],
        default: '' // Dr. ya Cr. indicator ke liye
    },
    balance: {
        type: Number,
        required: true // Remaining balance
    }
}, { timestamps: true });

export const Data = mongoose.model("data", dataSchema);