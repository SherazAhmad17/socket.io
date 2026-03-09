import server from './app.js';


const PORT  = process.env.PORT || 1111;


server.listen(PORT, ()=>{
    try {
        
        console.log(`Server is running on port ${PORT}`);

    }catch (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
})