export interface EmailPrediction {
    subject: string;
    prediction: number; // 0 = legit, 1 = spam
}

export interface TrainResponse {
    message: string;
}
