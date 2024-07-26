import React from 'react';
import { RiExternalLinkLine } from 'react-icons/ri';
import Title from '../layouts/Title';
import { certificate } from '../../assets';

const Publication = () => {
  return (
    <section id="publication" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center mb-8">
        <Title des="Publication" />
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-6 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col md:gap-8 items-center md:items-start">
            <img
              className="w-full h-auto max-w-xs md:max-w-md object-cover rounded-lg"
              src={certificate}
              alt="certificate"
            />
            <div className="w-full flex flex-col justify-center md:justify-start text-center md:text-left mt-4 md:mt-0">
              <a
                href="https://www.jetir.org/view?paper=JETIR2403307"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase text-designColor tracking-wide mb-2 inline-flex items-center"
              >
                <p className='font-size'>Published Paper</p>
                <RiExternalLinkLine className="ml-2 text-lg" />
              </a>
              <h3 className="text-xl md:text-2xl font-bold">Sai Ram Aleti</h3>
              <p className="text-base text-gray-500">Author</p>
            </div>
          </div>
          <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between mt-8 lgl:mt-0">
            <div className="w-full h-auto py-6 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-6 flex flex-col justify-center gap-4">
              <div className="flex flex-col items-center py-4 border-b-2 border-b-gray-900">
                <h3 className="text-xl lgl:text-2xl font-medium tracking-wide text-center">
                  Severity based Hierarchical ECG Classification using 
                  Neural Networks.
                </h3>
                <p className="text-base text-gray-400 mt-3 text-center">
                  via JETIR - March 2024
                </p>
              </div>
              <p className="text-base text-gray-400 font-medium tracking-wide leading-6 text-center">
                <b>"SEVERITY BASED HIERARCHICAL ECG CLASSIFICATION USING NEURAL NETWORKS"</b>, International Journal of Emerging Technologies and Innovative Research (www.jetir.org), ISSN:2349-5162, Vol.11, Issue 3, page no.d49-d53, March-2024.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publication;
