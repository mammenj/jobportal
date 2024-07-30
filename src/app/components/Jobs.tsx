export default function Jobs({ header }: { header: string }) {
    return (
        <div className="bg-slate-200 py-6 rounded-3xl">
            <div className="container">
                <h2 className="font-bold mb-4">{header || 'Recent jobs'}</h2>

                <div className="flex flex-col gap-4">
                    <div className="bg-white p-6 rounded-sm shadow-sm">
                        Test job 1
                    </div>
                    <div className="bg-white p-6 rounded-sm shadow-sm">
                        Test job 1
                    </div>
                    <div className="bg-white p-6 rounded-sm shadow-sm">
                        Test job 1
                    </div>
                </div>
            </div>
        </div>
    );
}