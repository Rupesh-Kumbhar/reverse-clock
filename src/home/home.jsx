import React from "react";
import '../../src/home/home.scss'

function Home(){
    return(
        <div className="ht-100vh">
            <h1>Home</h1>
            <div className="col-sm-12 d-flex justify-content-center">
                <div className="col-sm-10">
                    <div class="card w-25 bg-dark" >
                        
                        <image class="card-img-top" src=".../100px180/" alt="Card image cap" />
                            <div class="card-body">
                                <h1 class="card-title">20 Mins</h1>
                                <p class="card-text">Add some gif here ,also Add some break naps</p>
                                <div className="col-sm-12 d-flex justify-content-md-around">
                                    <a href="#" class="btn btn-primary">Start</a>
                                    <a href="#" class="btn btn-primary">Pause</a>
                                </div>
                            </div>
                    </div>
                </div>                
            </div>
        </div>
    )

}
export default Home;