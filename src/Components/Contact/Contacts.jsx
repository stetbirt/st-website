import React from "react";
import './Contacts.css'

const Contacts = () => {
    return (
        <div>
            <section className="pt-5">
                <div className="main-card-container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="">
                        <div className="lg:mb-0 mb-10">
                            <div className="group w-full">
                                <div className="relative container-height lg:rounded-l-xl rounded-xl" style={{backgroundImage: `url(/st-website/assets/images/1.jpg)`}}>
                                    <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">My Card</h1>
                                    <div className="absolute bottom-0 w-full lg:p-11 p-5">
                                        <div className="bg-white rounded-lg p-6 block">
                                            <a href="" className="link-item flex items-center mb-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 512 512">
                                                    <path
                                                        d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
                                                </svg>
                                                <h5 className="text-black text-base font-normal leading-6 ml-5">Coming Soon</h5>
                                            </a>
                                            <a href="" className="link-item flex items-center mb-6">
                                                <span className="[&>svg]:h-5 [&>svg]:w-5">
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      fill="currentColor"
                                                      viewBox="0 0 448 512">
                                                      <path
                                                          d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                                                  </svg>
                                                </span>
                                                <h5 className="text-black text-base font-normal leading-6 ml-5">Coming Soon</h5>
                                            </a>
                                            <a href="" className="link-item flex items-center">
                                                <span className="[&>svg]:h-5 [&>svg]:w-5">
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      fill="currentColor"
                                                      viewBox="0 0 448 512">
                                                      <path
                                                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                                                  </svg>
                                                </span>
                                                <h5 className="text-black text-base font-normal leading-6 ml-5">Coming Soon</h5>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contacts;
