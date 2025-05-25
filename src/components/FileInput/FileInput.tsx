interface Props {
    onChange: (file: File) => void;
}

export default function FileInput(props: Props) {
    const { onChange } = props
    return (
        <label className="block w-full">
            <span className="sr-only">Upload CSV file</span>
            <input
                type="file"
                accept=".csv"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) onChange(file);
                }}
                className="block w-full text-sm text-gray-600
          file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
            />
        </label>
    );
}
