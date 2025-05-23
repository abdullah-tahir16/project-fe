import { useUploadAndScan } from '../../infrastructure/useCases/uploadAndScan';
import { useTrainModelUseCase } from '../../infrastructure/useCases/trainModel';
import { useState } from 'react';
import FileInput from '../../components/FileInput/FileInput';
import Button from '../../components/Button/Button';
import { AtSymbolIcon } from '@heroicons/react/20/solid';
import Loader from '../../components/Loader/Loader';
import PredictionList from '../../components/PredictionList/PredictionList';

export default function SpamDetection() {
    const [file, setFile] = useState<File | null>(null);
    const [darkMode, setDarkMode] = useState(false);

    const { scan, data: predictions = [], isLoading: scanning } = useUploadAndScan();
    const { train, isLoading: training } = useTrainModelUseCase();

    // Combined loading state for both operations
    const isLoading = scanning || training;

    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-black flex items-center justify-center p-6 transition-colors">
                <div className="w-full max-w-xl bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 space-y-6 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <AtSymbolIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            <h1 className="text-2xl font-semibold">Spam Detection</h1>
                        </div>
                        <button
                            className="text-sm px-2 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => setDarkMode((prev) => !prev)}
                        >
                            {darkMode ? '🌞 Light' : '🌙 Dark'}
                        </button>
                    </div>

                    {isLoading && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 dark:bg-gray-900/30">
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg">
                                <Loader />
                            </div>
                        </div>
                    )}

                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        Upload a CSV file with email subjects to detect spam using a trained model.
                    </p>

                    <FileInput onChange={setFile} />

                    <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                            label="Scan Emails"
                            onClick={() => file && scan(file)}
                            disabled={!file || scanning}
                            variant="primary"
                            loading={scanning}
                            className="w-full sm:w-auto text-sm px-4 py-2"
                        />
                        <Button
                            label="Train Model"
                            onClick={train}
                            disabled={training}
                            variant="secondary"
                            loading={training}
                            className="w-full sm:w-auto text-sm px-4 py-2"
                        />
                    </div>

                    {predictions.length > 0 && (
                        <div className="mt-6">
                            <h2 className="text-base font-medium mb-2">📊 Prediction Results</h2>
                            <PredictionList predictions={predictions} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
