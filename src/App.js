import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Sidebar  from './components/Sidebar'

function App() {
    const activeMenu = true;
    return (
        <div>
            <BrowserRouter>
                <div className='flex relative dark:bg-main-dark-bg'>
                    <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
                        <TooltipComponent content="Settings" position='Top'>
                            <button>

                            </button>

                        </TooltipComponent>

                    </div>
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                        <Sidebar />
                      </div>
                    ) : (
                        <div>

                        </div>
                    )}

                </div>
            </BrowserRouter>
        </div>
    );
}
export default App;

