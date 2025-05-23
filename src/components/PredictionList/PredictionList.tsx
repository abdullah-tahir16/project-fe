import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/20/solid';

interface Props {
    predictions: { subject: string; prediction: number }[];
}

export default function PredictionList({ predictions }: Props) {
    return (
        <ul className="space-y-2">
            {predictions.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm">
                    {item.prediction === 1 ? (
                        <XCircleIcon className="h-5 w-5 text-red-600" />
                    ) : (
                        <CheckCircleIcon className="h-5 w-5 text-green-600" />
                    )}
                    <span className="text-gray-700">{item.subject}</span>
                </li>
            ))}
        </ul>
    );
}
