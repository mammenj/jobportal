export default function JobRow() {
    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow-md flex gap-4">
                <div className="div"><img className="aspect-auto size-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png" /></div>
                <div className="div">
                    <div className="div">Amazon</div>
                    <div className="div">Software Architect</div>
                    <div className="div">Remote &middot; New York &middot; USA &middot; Full time</div>
                </div>
                <div className="div">createdAt</div>
            </div>
        </>
    )
}