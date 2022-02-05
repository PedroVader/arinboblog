import React from 'react';

const Form = () => {
  return (
  
  <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h1 className="text-xl mb-5 font-semibold border-b pb-4"> 
      
      ¡Contacta con nosotros para cualquier duda!

      &nbsp;

      </h1>

      <form action="https://api.forming.site/f/61f6b1ee6b3047638a020106" method='POST'>
        
        <div className='mb-2'> 
        <label htmlFor="Correo">Correo</label>
        </div>

        <div>
        <input name="Correo" required className='border-solid mb-3 border-2 p-2 border-black-500' type="email" placeholder='Correo' />
        </div>
        
        <div className='mb-2'> 
        <label htmlFor="Nombre">Nombre</label>
        </div>

        <div>
        <input name="Nombre" required className='border-solid mb-3 border-2 p-2 border-black-500' type="text" placeholder='Nombre' />
        </div>
        
     
        <div className='mb-2'>
        <label htmlFor="Asunto">Asunto</label>
        </div>

        <div>
        <input name="Asunto" required className='border-solid mb-3 border-2 p-2 border-black-500' type="text" placeholder='Asunto' />
        </div>        
        
        <div className='mb-2'>
        <label htmlFor="Mensaje">Mensaje</label> 
        </div>

        <div>
        <textarea name="Mensaje" required className='border-solid  mb-3 border-2 p-2 border-black-500' type="text" placeholder='Mensaje' />
        </div>


        <button 
        type='submit'
        className="mt-3 transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
        Enviar
        </button>    
    
      </form>
  </div>
  );
};

export default Form;
