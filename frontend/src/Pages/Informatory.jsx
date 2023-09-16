import React from 'react'
import { Link } from 'react-router-dom';
import ew1 from '../assets/ewaste5-removebg-preview.png';
import ew2 from '../assets/ewaste2.png';
import ew3 from '../assets/ewaste10-1.png';
import ew4 from '../assets/ewaste11-1.png';
import ew5 from '../assets/ewaste13-1.png';
import ew6 from '../assets/ewaste16-1.png';
import ew7 from '../assets/ewaste17-1.png';
import logo from '../assets/Govlogo.png'
export const Informatory = () => {
  return (
    <div>
        <div className='flex bg-[#e6ab77] justify-between items-center w-full max-w-[1640px] h-[55px] mx-auto px-2'>
            <div className='font-semibold'><Link to='/'>E-Swachh</Link></div>
            <div className='font-bold'>INFORMATORY</div>
            <div className='flex flex-row-reverse justify-between items-center'>
                <Link to="#"> 
                    <img 
                    className='text-black'
                    src={logo} alt="Logo" width={50} height={15} loading="lazy"></img>
                </Link>
                <h5 className=' text-[#000000] text-xs font-semibold'>Ministry of Environment , Forest<br />
                    and Climate Change   
                </h5>
            </div>
        </div>
        <div className='bg-[#f4c8a2ab] mx-auto min-h-[100vh] px-8 pb-10'>
          <p className='text-5xl pb-10 mx-10 pt-14'>Here's all you need to know about e-waste : </p>
          <div className='w-[95%] mx-auto flex flex-col space-y-7'>
            <div className='bg-[#f4f1ee] p-4 flex flex-row justify-center items-center rounded-xl w-full space-x-10'>
              <div className='py-2'>
                <img src={ew1} width={350} loading='lazy'></img>
              </div>
              <div className='flex flex-col w-[54%]'>
                <div className='text-4xl font-bold'>What is E-Waste?</div>
                <div className='pl-1 pt-2'>Electronic waste, or e-waste, encompasses items equipped with plugs, cords, and electronic components. Common origins of e-waste encompass televisions, computers, mobile phones, and a variety of household appliances, spanning from air conditioners to children's toys.The valuable metals like copper, silver, gold, and platinum can be reused from e-wastes once they are scientifically processed. The presence of toxic substances like liquid crystal, lithium, mercury, nickel, selenium, polychlorinated biphenyls (PCBs), arsenic, barium, brominates flame retardants, cadmium, chrome, cobalt, copper, and lead makes it very hazardous, in case e-waste get dismantled and processed in a crude manner with the rudimentary techniques. </div>
              </div>
            </div>
            <div className='bg-[#f4f1ee] p-4 flex flex-row-reverse justify-center items-center rounded-xl w-full'>
              <div className='py-2'>
                <img src={ew3} width={400} loading='lazy'></img>
              </div>
              <div className='flex flex-col w-[54%] pr-10 py-3'>
                <div className='text-4xl font-bold'>Burden of e-waste</div>
                <div className='pl-1 pt-2'>In India, managing solid waste has become increasingly complex due to the emergence of electronic waste (e-waste). In 2005, the estimated e-waste from discarded or malfunctioning electronic and electrical equipment was 146,000 tonnes, and it was projected to surpass 800,000 tonnes by 2012. However, according to the Greenpeace Report, India generated 380,000 tonnes of e-waste in 2007, with only 3% of it reaching authorized recycling facilities. This is partly because India has become a destination for e-waste dumping by developed nations. According to the Basel Action Network (BAN), 50-80% of e-waste collected in the USA is exported to India, China, Pakistan, Taiwan, and various African countries.
                India, as one of the world's fastest-growing economies, has seen a tremendous surge in domestic demand for consumer electronics. Between 1998 and 2002, there was a 53.1% increase in the sales of both large and small household appliances worldwide. Another report indicates that in India, approximately 1.38 million personal computers from businesses and households become obsolete each year, contributing to an annual e-waste generation rate of around 10%, which has adverse effects on environmental health indicators. </div>
              </div>
            </div>
            <div className='bg-[#f4f1ee] p-4 flex flex-row justify-center items-center rounded-xl w-full space-x-10'>
              <div className='py-2'>
                <img src={ew2} width={350} loading='lazy'></img>
              </div>
              <div className='flex flex-col w-[54%] py-2'>
                <div className='text-4xl font-bold'>Why does it needs to be recycled?</div>
                <div className='pl-1 pt-2'>E-waste must be recycled primarily to prevent environmental harm. Electronic devices contain hazardous materials that can pollute soil and water if disposed of improperly. Recycling recovers valuable resources like metals and reduces the energy required for manufacturing, lowering carbon emissions. It also lessens the strain on landfills, extending their lifespan.<br/>
                Additionally, recycling e-waste can create jobs and support local economies. Complying with regulations ensures responsible disposal. Proper recycling prevents data breaches by securely erasing sensitive information. It promotes sustainability and aligns with the circular economy, reducing waste and environmental impact. Ultimately, recycling e-waste is a multifaceted solution with economic, environmental, and social benefits. </div>
              </div>
            </div>
            <div className='bg-[#f4f1ee] p-4 flex flex-row-reverse justify-center items-center rounded-xl w-full'>
              <div className='py-2'>
                <img src={ew4} width={400} loading='lazy'></img>
              </div>
              <div className='flex flex-col w-[54%] pr-10 py-3'>
                <div className='text-4xl font-bold'>Effect of e-waste on human health</div>
                <div className='pl-1 pt-2'>The health effects of e-waste exposure are a cause for concern. E-waste contains hazardous materials like lead, mercury, and cadmium, which can pose serious health risks when not handled properly. Workers involved in dismantling and recycling e-waste are at particular risk of toxic chemical exposure, leading to respiratory problems, skin disorders, and even neurological damage. Prolonged exposure to these toxins can increase the risk of cancer, elevate blood pressure, and disrupt reproductive health. Children, with their developing bodies, are especially vulnerable and may experience stunted growth and learning disabilities. Furthermore, communities living near e-waste disposal sites can suffer from elevated heavy metal levels in their blood and increased stress due to health concerns and environmental contamination. To address these health risks, stringent e-waste management practices and improved awareness are essential. </div>
              </div>
            </div>
            <div className='bg-[#f4f1ee] p-4 flex flex-row justify-center items-center rounded-xl w-full space-x-10'>
              <div className='py-2'>
                <img src={ew5} width={350} loading='lazy'></img>
              </div>
              <div className='flex flex-col w-[54%] py-2'>
                <div className='text-4xl font-bold'>Effect of e-waste on environment</div>
                <div className='pl-1 pt-2'>E-waste poses significant environmental challenges. Electronic devices often contain hazardous materials such as lead, mercury, and cadmium, which can leach into the environment when e-waste is improperly disposed of or recycled. This toxic chemical pollution can contaminate soil, groundwater, and surface water, posing risks to ecosystems and human health. Furthermore, the burning or dismantling of e-waste releases harmful pollutants into the air, contributing to air pollution and potentially causing respiratory issues. E-waste can also lead to water contamination as toxins migrate into water sources, affecting aquatic life and communities reliant on tainted water. The depletion of valuable resources within electronic devices, coupled with the energy-intensive manufacturing processes, underscores the importance of recycling e-waste to reduce resource consumption and greenhouse gas emissions. Additionally, the accumulation of electronic waste in landfills contributes to the expansion of landfill sites and poses long-term environmental risks. The global transport of e-waste, often to developing countries, exacerbates these issues and necessitates responsible international management. Overall, addressing e-waste's environmental impact requires proper recycling, safe disposal, and increased awareness of responsible e-waste management practices. </div>
              </div>
            </div>
            <div className='bg-[#f4f1ee] p-4 flex flex-row-reverse justify-center items-center rounded-xl w-full'>
              <div className='py-2'>
                <img src={ew6} width={400} loading='lazy'></img>
              </div>
              <div className='flex flex-col w-[54%] pr-10 py-3'>
                <div className='text-4xl font-bold'>Stages of e-waste recycling</div>
                <div className='pl-1 pt-2'>
                  <ul className='list-disc pl-5'>
                  <li><span className='font-bold'>Collection </span>: Gather e-waste from various sources.</li>
                  <li><span className='font-bold'>Sorting </span>: Categorize items based on type and condition.</li>
                  <li><span className='font-bold'>Data Destruction </span>: Erase sensitive data securely.</li>
                  <li><span className='font-bold'>Dismantling </span>: Disassemble devices into components.</li>
                  <li><span className='font-bold'>Material Separation </span>: Isolate metals from non-metallic materials.</li>
                  <li><span className='font-bold'>Shredding </span>: Reduce non-metallic parts to smaller pieces.</li>
                  <li><span className='font-bold'>Metal Refining </span>: Refine and smelt metals for reuse.</li>
                  <li><span className='font-bold'>Plastic Recycling </span>: Process shredded plastics for reuse.</li>
                  <li><span className='font-bold'>Hazardous Waste Disposal </span>: Safely handle and dispose of hazardous materials.</li>
                  <li><span className='font-bold'>Quality Control </span>: Ensure recovered materials meet standards.</li>
                  <li><span className='font-bold'>Reuse and Refurbishment </span>: Refurbish functional components or devices.</li>
                  <li><span className='font-bold'>Documentation and Compliance </span>: Maintain records and adhere to regulations.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='bg-[#f4f1ee] p-4 flex flex-row justify-center items-center rounded-xl w-full space-x-10'>
              <div className='py-2'>
                <img src={ew7} width={350} loading='lazy'></img>
              </div>
              <div className='flex flex-col w-[54%] py-2'>
                <div className='text-4xl font-bold'>Importance of e-waste management</div>
                <div className='pl-1 pt-2'>Effective e-waste management is of paramount importance for several reasons. Firstly, it mitigates the adverse environmental impact of electronic waste by preventing the release of hazardous materials into the environment, which can contaminate soil, water, and air. Secondly, responsible e-waste recycling promotes the conservation of valuable resources, reducing the need for mining and the associated environmental degradation. Thirdly, it contributes to energy savings by reusing materials, thus reducing the carbon footprint associated with the manufacturing of new electronics. Moreover, proper e-waste management helps protect human health by minimizing exposure to toxic substances found in electronic devices. Additionally, it stimulates economic growth by creating job opportunities in the recycling industry. Lastly, it aligns with sustainability principles, fostering a circular economy where materials are reused and recycled, reducing waste generation and supporting a healthier planet for future generations.</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
