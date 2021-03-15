import "./Main.css";
import hello from "../../assets/hello.svg";
import Chart from "../charts/Chart";

const Main = () => {
    return (
        <main>
            <div className="main__container">
                {/* <!-- CHARTS STARTS HERE --> */}
                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Annual Projection</h1>
                                <p>Asset Balance vs No Of Years</p>
                            </div>

                        </div>
                        <div class="switch-toggle switch-3 switch-candy">

                            <input id="on" name="state-d" type="radio" checked="" />
                            <label for="on" onclick="">10y</label>

                            <input id="na" name="state-d" type="radio" checked="checked" />
                            <label for="na" class="disabled" onclick="">20y</label>

                            <input id="off" name="state-d" type="radio" />
                            <label for="off" onclick="">30y</label>

                        </div>
                        <Chart />
                    </div>

                    <div className="charts__right">

                        <div className="charts__right__cards">
                            <div className="card1">
                                <img width="80" src={hello} alt="image" />
                                <p>Understand the power of compounding</p>
                                <button class="button"> Learn Now! </button>
                            </div>

                            <div className="card3">
                                <img width="50" src={hello} alt="image" />
                                <p>Track all your expenses</p>
                                <button class="button"> Learn Now! </button>
                            </div>


                        </div>
                    </div>
                </div>
                {/* <!-- CHARTS ENDS HERE --> */}


                {/* <!-- MAIN CARDS STARTS HERE --> */}
                <div className="main__cards">
                    <div className="card">
                        <h3>Asset balance <i class="fa fa-ellipsis-h" aria-hidden="true"></i></h3>
                        <br />
                        <div className="card_inner">
                            <p className="text-primary-p">Enter Amount:</p><br />
                            <h4><i class="fa fa-inr" aria-hidden="true"></i>1,25,000</h4><br />
                            <p className="text-primary-p">Last Updated:<span> </span> 3Dec</p>
                            <span className="font-bold text-title"><i class="fa fa-balance-scale fa-4x" aria-hidden="true"></i></span>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Growth Rate <i class="fa fa-ellipsis-h" aria-hidden="true"></i></h3>
                        <br />
                        <div className="card_inner">
                            <p className="text-primary-p">Enter Growth Rate</p><br />
                            <h4>9.3%</h4><br />
                            <p className="text-primary-p">Inflation : <span> </span>6% </p>
                            <span className="font-bold text-title"><i class="fa fa-level-up fa-3x" aria-hidden="true"></i></span>

                        </div>
                    </div>

                    <div className="card">
                        <h3>Major Invest <i class="fa fa-ellipsis-h" aria-hidden="true"></i></h3>
                        <br />
                        <div className="card_inner">
                            <p className="text-primary-p">Returns generated per month</p><br />
                            <h4><i class="fa fa-inr" aria-hidden="true"></i>1,25,000</h4><br />
                            <span className="font-bold text-title"><i class="fa fa-balance-scale fa-4x" aria-hidden="true"></i></span>

                        </div>
                    </div>

                </div>
                <div className="main__cards">

                    <div className="card">
                        <h3>Financial Indep <i class="fa fa-ellipsis-h" aria-hidden="true"></i></h3>
                        <br />
                        <div className="card_inner">
                            <p className="text-primary-p">Age</p><br />
                            <h4><i class="fa fa-inr" aria-hidden="true"></i>45yrs</h4><br />
                            <p className="text-primary-p">Last Updated:<span> </span> 3Dec</p>
                            <span className="font-bold text-title"><i class="fa fa-user-o fa-4x" aria-hidden="true"></i></span>
                        </div>
                    </div>

                    <div className="card">

                        <h3>Average Expen <i class="fa fa-ellipsis-h" aria-hidden="true"></i></h3>
                        <br />
                        <div className="card_inner">
                            <p className="text-primary-p">Amount :</p><br />
                            <h4><i class="fa fa-inr" aria-hidden="true"></i>1,25,000</h4><br />
                            <p className="text-primary-p">3 months average<span> </span> 40000</p>
                        </div>
                    </div>
                </div>
                {/* <!-- MAIN CARDS ENDS HERE --> */}



            </div>
        </main>
    );
};

export default Main;
