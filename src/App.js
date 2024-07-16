
import './App.css'; 
import {useState} from 'react'

function App() {

const [principal,setPrincipal] = useState();
const [interstRate , setInterstRate] = useState();
const [duration ,setDuration]= useState();
const [emi,setEmi] = useState();
const [totalInterst,setTotalInterst] = useState(null);
const[totalPayments,setTotalPayments]= useState(null);


const CalculateEmi=()=>{
  //interst rate 
  const rate = interstRate/12/100
  //duration
   const noOfmonth = duration*12
   //emi value

   const emivalue = (principal*rate*Math.pow(1+rate,noOfmonth))/(Math.pow(1+rate,noOfmonth)-1);
   const totalPaymentValue = emivalue*noOfmonth;
   const totalInterstValue = totalPaymentValue-principal;
   setEmi(emivalue.toFixed(2));
   setTotalPayments(totalPaymentValue.toFixed(2));
   setTotalInterst(totalInterstValue.toFixed(2));


}
 //submit handler

 const handleOnSubmit=(e)=>{
  //prevent default behaviour
  e.preventDefault();
  const emiCalculated = CalculateEmi(Number(principal),Number(interstRate),Number(duration));
  setEmi(emiCalculated);

 }


  return (
    <div className="App bg-slate-600">
      <header className="p-12 font-bold text-[20px] text-white bg-yellow-900">EMI CALCULATOR</header>
      {/*Main part*/}
      <div className="flex w-[80vw] h-[100vh] mx-auto space-x-2 ">
      
        {/*left part*/}
        <div className="flex flex-col  w-[50%]  ">
          <div className=' mt-24  border-4 border-emerald-100'>
          <h1 className='p-4 bg-pink-100'>Loan Parameters</h1>
          {/* form */}
           <form onSubmit={handleOnSubmit}>
            {/*loan amount*/}
           <div className='bg-white p-4'>
            <label htmlFor='loanAmount' className='mx-auto'>LoanAmount</label>
            <input
            type='number'
            id='loanAmount'
            placeholder='enter the amount in rupeees'
            className='outline mx-2'
            value={principal}
            onChange={(e)=>setPrincipal(e.target.value)}
            />
           </div>
            {/*Interst rate*/}
            <div className='bg-green-100 p-4'>
            <label htmlFor='interstrate' className='mx-auto'>Interst Rate</label>
            <input
            type='number'
            id='interstrate'
            placeholder='enter the rate'
            className='outline mx-2'
            value={interstRate}
            onChange={(e)=>setInterstRate(e.target.value)}
            />
           </div>
            {/*loan term*/}
            <div className='bg-gray-200 p-4'>
            <label htmlFor='loanterm' className='mx-auto'>LoanTerm</label>
            <input
            type='number'
            id='loanterm'
            placeholder='enter the years'
            className='outline mx-2'
            value={duration}
            onChange={(e)=>setDuration(e.target.value)}
            />
           </div>
           
           </form>
           <div>
            <button className='outline mx-auto m-10 p-1' onClick={CalculateEmi}>Calculate</button>
           </div>
            
          </div>
        </div>
        {/*right part*/}
        <div className='flex flex-col  w-[50%]  '>
          <div className='mt-24   border-4 border-emerald-100'>
            {/*Repaymet Details*/}
          <div className=' bg-pink-400 p-4'>Repayment Details</div>
          <div className=' bg-green-300 p-4'>
            Loan Amount = <span>{principal}</span>

          </div>
          <div className=' bg-gray-400 p-4'>
            EMI = <span>{emi}</span>

          </div>
          <div className='bg-white p-4'>
            Total Interst = <span>{totalInterst}</span>

          </div>
          <div className='p-4'>
            Total Payments= <span>{totalPayments}</span>

          </div>
          <div className='bg-yellow-400 p-4'>
            Periods = <span>{duration*12}</span> Months

          </div>
         
          
          
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
