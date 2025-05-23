import { useUploadAndScan } from '../../infrastructure/useCases/uploadAndScan';
import { useTrainModelUseCase } from '../../infrastructure/useCases/trainModel';
import { useState } from 'react';
import FileInput from '../../components/FileInput/FileInput';
import Button from '../../components/Button/Button';
import PredictionList from '../../components/PredictionList/PredictionList';

export default function SpamDetection() {
    const [file, setFile] = useState<File | null>(null);
    const { scan, data: predictions = [], isLoading: scanning } = useUploadAndScan();
    const { train, isLoading: training } = useTrainModelUseCase();

    return (
        <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-purple-50 py-20 px-4">
            <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6 border border-gray-100">
                <h1 className="text-2xl font-semibold text-blue-900 flex items-center gap-2">
                    📬 Spam Detection
                </h1>

                <p className="text-sm text-gray-600">
                    Upload a CSV file with email subjects to classify them as spam or legit.
                </p>

                <FileInput onChange={setFile} />

                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                    <Button
                        label={scanning ? 'Scanning...' : 'Scan Emails'}
                        onClick={() => file && scan(file)}
                        disabled={!file || scanning}
                        variant="primary"
                        className="text-sm px-3 py-1.5 min-w-[120px]"
                    />
                    <Button
                        label={training ? 'Training...' : 'Train Model'}
                        onClick={train}
                        disabled={training}
                        variant="secondary"
                        className="text-sm px-3 py-1.5 min-w-[120px]"
                    />
                </div>

                {predictions.length > 0 && (
                    <div className="mt-6">
                        <h2 className="text-base font-medium text-gray-700 mb-2">📊 Prediction Results</h2>
                        <PredictionList predictions={predictions} />
                    </div>
                )}
            </div>
        </div>
    );
}
