
import {BrowserRouter as Router,Route,Routes,NavLink} from 'react-router-dom'
import Header from "./components/Header"
import AboutIconLink from "./components/AoutIconLink"
import FeedbackList from './components/FeedbackList'
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import {FeedbackProvider} from './context/FeedbackContext'


function App(){

return(
    <FeedbackProvider>
       
            <Header/>        
            <div className="container">
            <Router>
                <Routes>                        
                    <Route exact path = '/' element={
                        <>
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList />
                        </>
                    }>
                        
                    </Route>
                    <Route path='/about' element={<AboutPage/>} > This is the about route</Route>            
                
                </Routes> 
                <AboutIconLink/>
                </Router>
            </div>    
            
        
    </FeedbackProvider>
)
 
        
    
}

export default App