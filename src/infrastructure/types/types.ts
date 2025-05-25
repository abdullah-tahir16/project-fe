export interface EmailPrediction {
    subject: string;
    prediction: number; // 0 = legit, 1 = spam
}

export interface ApiResponse {
    message: string;
    data?: any;
}

export interface TrainResponse extends ApiResponse {
    data?: string;
}

export interface ScanResponse extends ApiResponse {
    data?: EmailPrediction[];
}
