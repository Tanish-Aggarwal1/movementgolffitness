import React from 'react';
import { motion } from 'framer-motion';

function Container({children}) {
  return (
  <motion.div className='w-full h-full mx-auto'
  initial={{ opacity: 0}}
  animate={{ opacity:1}}
  exit={{ opacity: 0}}
  transition={{ duration: 0.5}}>
    {children}
    </motion.div>
    );
  
}

export default Container