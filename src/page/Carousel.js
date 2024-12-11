import React from "react";

function Carousel(){
    return(
        <div class="row">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="./img/1.jpg" class="d-block w-100" alt="..."
                    style={{ height: "600px", objectFit: "cover"}}/>
                    </div>
                    <div class="carousel-item">
                    <img src="./img/2.jpg" class="d-block w-100" alt="..."
                    style={{ height: "600px", objectFit: "cover"}}/>
                    </div>
                    <div class="carousel-item">
                    <img src="./img/3.jpg" class="d-block w-100" alt="..."
                    style={{ height: "600px", objectFit: "cover"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;