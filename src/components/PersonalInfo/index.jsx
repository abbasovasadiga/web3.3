import './style.css'

function PersonalInfo() {
    return (
        <div className="personal-info">
            <h1>PERSONAL INFO</h1>
            <div className="personal-info-item">
                <span>Ad:</span>
                <span>John</span>
            </div>
            <div className="personal-info-item"> 
                <span>Yas:</span>
                <span>21</span>
            </div>

            <div className="personal-info-item">
                <span>Yasayis yeri:</span>
                <span>Baki</span>
            </div>
        </div >
    );
}

export default PersonalInfo;