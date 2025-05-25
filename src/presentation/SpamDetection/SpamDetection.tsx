import { useUploadAndScan } from '../../infrastructure/usecases/SpamDetection/uploadAndScan.ts';
import { useTrainModelUseCase } from '../../infrastructure/usecases/SpamDetection/trainModel.ts';
import { useState } from 'react';
import FileInput from '../../components/FileInput/FileInput';
import Button from '../../components/Button/Button';
import { AtSymbolIcon } from '@heroicons/react/20/solid';
import Loader from '../../components/Loader/Loader';
import PredictionList from '../../components/PredictionList/PredictionList';
import {ChartBarIcon} from "@heroicons/react/16/solid";

export default function SpamDetection() {
    const [file, setFile] = useState<globalThis.File | null>(null);
    const [darkMode, setDarkMode] = useState(false);

    const { scan, data: scanResponse = { data: [] }, isPending: scanning } = useUploadAndScan();
    const { train, isPending: training } = useTrainModelUseCase();
    const isLoading = scanning || training;

    const containerClass = `min-h-screen flex items-center justify-center p-6 transition-colors bg-gradient-to-br ${
        darkMode ? 'from-gray-800 via-gray-900 to-black' : 'from-blue-50 via-white to-purple-50'
    }`;

    const cardClass = `w-full max-w-xl p-8 space-y-6 shadow-2xl rounded-2xl border text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700`;

    return (
        <div className={darkMode ? 'dark' : ''}>
            <main className={containerClass}>
                <section className={cardClass}>
                    <header className="flex justify-between items-center">
                        <span className="flex items-center gap-2">
                            <AtSymbolIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            <h1 className="text-2xl font-semibold">Spam Detection</h1>
                        </span>
                        <button
                            onClick={() => setDarkMode((prev) => !prev)}
                            className="text-sm px-2 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            {darkMode ? '🌞 Light' : '🌙 Dark'}
                        </button>
                    </header>

                    {isLoading && (
                        <div className="fixed inset-0 z-50 bg-black/30 dark:bg-gray-900/30 flex items-center justify-center">
                            <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
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
                            className="w-full sm:w-auto text-sm px-4 py-2"
                        />
                        <Button
                            label="Train Model"
                            onClick={train}
                            disabled={training}
                            variant="secondary"
                            className="w-full sm:w-auto text-sm px-4 py-2"
                        />
                    </div>

                    {!!scanResponse?.data?.length && (
                        <>
                            <h2 className="text-base font-medium mt-6 mb-2 flex items-center gap-2">
                                <ChartBarIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                Prediction Results
                            </h2>
                            <PredictionList predictions={scanResponse.data} />
                        </>
                    )}
                </section>
            </main>
        </div>
    );
}
