import './Gallery.css'
import React from 'react'

const images = [
    'https://static.wixstatic.com/media/fb9abc_d948685ccd2b490784fd7d0a0dc43fb8~mv2.jpg/v1/fill/w_960,h_556,al_c,q_85/fb9abc_d948685ccd2b490784fd7d0a0dc43fb8~mv2.webp',
    'https://static.wixstatic.com/media/fb9abc_c030d7e2da0d4c098c88d01facab4ef7~mv2.jpg/v1/fill/w_1433,h_806,al_c,q_85,usm_0.66_1.00_0.01/fb9abc_c030d7e2da0d4c098c88d01facab4ef7~mv2.webp',
    'https://static.wixstatic.com/media/fb9abc_5f39cf7b639c4458bc6bfb43d14ef1d6~mv2.jpg/v1/fill/w_960,h_561,al_c,q_85/fb9abc_5f39cf7b639c4458bc6bfb43d14ef1d6~mv2.webp',
    'https://static.wixstatic.com/media/fb9abc_a0fc110333d645e6bfb8f8cf696f43c9~mv2.jpeg/v1/fill/w_976,h_732,al_c,q_85,usm_0.66_1.00_0.01/fb9abc_a0fc110333d645e6bfb8f8cf696f43c9~mv2.webp',
    'https://static.wixstatic.com/media/fb9abc_ec6ae8299b8d4b62930f6094d9c965d4~mv2.jpeg/v1/fill/w_976,h_732,al_c,q_85,usm_0.66_1.00_0.01/fb9abc_ec6ae8299b8d4b62930f6094d9c965d4~mv2.webp',
    'https://static.wixstatic.com/media/fb9abc_d701c0e9b4a942148b837abc10ee06d0~mv2.jpeg/v1/fill/w_976,h_732,al_c,q_85,usm_0.66_1.00_0.01/fb9abc_d701c0e9b4a942148b837abc10ee06d0~mv2.webp',
    'https://static.wixstatic.com/media/fb9abc_7d2669e0c0d24f3e942d150171356149~mv2.jpg/v1/fill/w_960,h_483,al_c,q_85/fb9abc_7d2669e0c0d24f3e942d150171356149~mv2.webp',
    'https://static.wixstatic.com/media/fb9abc_1fe624551b114736833bb46704453742~mv2.jpg/v1/fill/w_960,h_460,al_c,q_85/fb9abc_1fe624551b114736833bb46704453742~mv2.webp',
    'https://static.wixstatic.com/media/fb9abc_e389c26ee0f9424fbd44f081b5403bf4~mv2.jpg/v1/fill/w_1301,h_732,al_c,q_85,usm_0.66_1.00_0.01/fb9abc_e389c26ee0f9424fbd44f081b5403bf4~mv2.webp',
    
]

class ImageGrid extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            images: [
                {name:'Sala de Musculação',src:images[0], desc:'This describes this image..'},
                {name:'Sala de ginástica',src:images[1], desc:'This describes this image 2..'},
                {name:'Recepção',src:images[2], desc:'This describes this image 3 ..'},
                {name:'Pilates com aparelhos',src:images[3], desc:'This describes this image 4..'},
                {name:'Pilates com aparelhos',src:images[4], desc:'This describes this image 5..'},
                {name:'Pilates Solo',src:images[5], desc:'This describes this image 6..'},
                {name:'Esteiras',src:images[6], desc:'This describes this image 6..'},
                {name:'Entrada',src:images[7], desc:'This describes this image 6..'},
                {name:'Piscina',src:images[8], desc:'This describes this image 6..'},
            ],
            currentSelection: {},
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount() {
        // set first image selected
        this.setState({ currentSelection: this.state.images[0] });
    }
    
    handleClick(val) {
        //console.log(val)
        this.setState({ currentSelection: val });
    }
    
    render(){
        var { images, currentSelection } = this.state;
        return(
        <div>
            <div className="gallery">
                <div className="col-md">
                    <h2 className="img-title mb-4">{ currentSelection.name }</h2>
                </div>
                <div className="col-md">
                    <div className="row">
                    {images.map((val, k) => {
                        return (
                        <div className="img col-sm-4" key={k}>
                            <img src={val.src} className={'img img-fluid  p-1' + (val.src===currentSelection.src?'img-selected':'')} onClick={() => this.handleClick(val)} />
                        </div>)
                        })
                    }
                     </div>
                </div>
            </div>
        </div>
        )
    }
};

export default class Gallery extends React.Component {
  render() {
    return (
    <div className="container-fluid py-3">
        <h1 className="text-center mb-3">Galeria de fotos</h1>
        <ImageGrid />
    </div>
    )
  }
}