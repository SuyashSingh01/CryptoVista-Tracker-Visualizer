import React from 'react';
// way to create a video cube component that will render the video on each face of the cube
// import src from 'src/folder'

 const CubeVideo=()=> {
  return (
        <div classNameName="items-center flex max-h-[1000px] justify-center max-w-[700px]">
           <div classNameName="cube__section">
            <div className="cube">
                <div className="cube__container">
                    <div className="cube__face cube__face--front">
                        <video className="video__container" autoplay muted loop>
                            <source className="video__media" src="https://storage.coverr.co/videos/KP78n9EWQAje1fm6Xr02N6zm7V01xxNRNK?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTg4MDIwODIzfQ._d_wNMzyykNR9_7lkgCpidj0JI4vCGuxfDKyEEfStO0" type="video/mp4"/>
                        </video>
                    </div>
                    <div className="cube__face cube__face--back">
                        <video className="video__container" autoplay muted loop>
                            <source className="video__media" src="https://storage.coverr.co/videos/KefsniMdijw4at9fT02iUufbPceUuJJG2?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTg4MDIwNjcxfQ.3kzxKS0a6bQ2dCcKpTxeZS2IpVfUekVpMFrBzpBwA2M" type="video"/>
                        </video>
                    </div>
                    <div className="cube__face cube__face--left">
                        <video className="video__container" autoplay muted loop>
                            <source className="video__media" src="https://storage.coverr.co/videos/34w86e7pqJzbji1yJ4gmfSanA01bjPyH7?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTg4MDIwNzYxfQ.xUJhNmkTYbzdHfVJsvVrtB4RFbn0cwaA7DRg9rEvMyU" type="video/mp4"/>
                        </video>
                    </div>
                    <div className="cube__face cube__face--right">
                        <video className="video__container" autoplay muted loop>
                            <source className="video__media" src="https://storage.coverr.co/videos/8GSSdF02KLFPJQgkILrDCkRfHHuouBMVA?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTg4MDIxMDMzfQ.Wk1guDwsEY_-Y1K8vo5FkU3GhutfkMA8PPxj4Afv5_w" type="video/mp4"/>
                        </video>
                    </div>
                    <div className="cube__face cube__face--top">
                        <video className="video__container" autoplay muted loop>
                            <source className="video__media" src="https://storage.coverr.co/videos/EZvZIdsvOkc00V02BDw3ZnH4VdoJK01qSsS?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTg4MDIxMTE4fQ.u6UFXCGSK755PtJtWoDAuFkasaQ7Tb2SbIXEGhFr4iw" type="video/mp4"/>
                        </video>
                    </div>
                    <div className="cube__face cube__face--bottom">
                        <video className="video__container" autoplay muted loop>
                            <source className="video__media" src="https://storage.coverr.co/videos/Vcve11Kp8bptZ00n1nsBEOh02qF5fgShYW?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTg4MDIwNDgwfQ.eI4Ak0fYiUzCRoLs2VdJZLea9e-zrjzJJ6RN1OFSim4" type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
        </div>
        </div>
  );
}
export default CubeVideo;