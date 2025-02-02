import React from 'react';
import { Link } from 'react-router-dom';


export default function TopCatagoriesListSection(props) {
  return (
    <div className="relative bg-gray-50  pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-1">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Find You Own Way Of Technologies
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Technologies selected by top corporate's globally at any platform.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 justify-items-center mt-20">
                  <div className=" homecard flex flex-col m-7 rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=UgujetFY6E&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="" />
            </div>
            {/* Reactnative */}
            <div className="flex-1 bg-grey p-6 flex flex-row justify-between">
              <div className="flex-1">
                <p className="text-sm font-bold text-indigo-600">
                  <Link to="/" className="hover:underline">
                    Courses
                  </Link>
                </p>
                <Link to="/" className="block mt-2">
                  <p className="text-xl font-semibold text-grey-800">
                    React Native With Essentials
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    React Native is an open-source mobile application framework created by Facebook, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use React's framework.
                  </p>
                </Link>
              </div>
              <div className="mt-6 flex items-center">
                <div className="py-4 flex-shrink-0">

                </div>
                
              </div>
            </div>
            
          </div>
        
          <div className="flex flex-col m-7 rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1612732127517-61509d7ceb33?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80" alt="" />
            </div>
            <div className="flex-1 bg-grey p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-bold text-indigo-600">
                  <Link to="/" className="hover:underline">
                    Courses
                  </Link>
                </p>
                <Link to="/" className="block mt-1">
                  <p className="text-xl font-semibold text-grey-800">
                    Web Development
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    On the CSS side you should choose a framework for reponsive web design:
                    Bootstrap  /  Material Design  /  W3.CSS
                    On the JavaScript side you should learn at least one modern framework:
                    React.js  /  Angular.js  /  Vue.js   /  W3.JS
                  </p>
                </Link>
              </div>
              <div className="mt-6 flex items-center">
                <div className="py-4 flex-shrink-0">
                 
                </div>
               
              </div>
            </div>
          </div>
          <div className="flex flex-col m-7 rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=UgujetFY6E&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <Link to="/" className="hover:underline">
                    Courses
                  </Link>
                </p>
                <Link to="/" className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900">
                    JavaScript For Beginners & Intermediate Levels
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions
                  </p>
                </Link>
              </div>
              <div className="mt-6 flex items-center">
              </div>

            </div>
          </div>
          <div className="flex flex-col m-7 rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cHl0aG9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <Link to="/" className="hover:underline">
                    Courses
                  </Link>
                </p>
                <Link to="/" className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900">
                    Programming - Beginners & Experts
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user.
                  </p>
                </Link>
              </div>
              <div className="mt-6 flex items-center">
               
                <div className="ml-3">
                 
                 
                </div>
              </div>
            </div>
          </div>
         
          <div className="flex flex-col m-7 rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1561883088-039e53143d73?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YW5ndWxhciUyMGpzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <Link to="/" className="hover:underline">
                    Courses
                  </Link>
                </p>
                <Link to="/" className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900">
                    Angular - Beginners & Experts
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.
                  </p>
                </Link>
              </div>
              <div className="mt-6 flex items-center">
               
                <div className="ml-3">
                </div>
              </div>
            </div>
          </div>
      
          <div className="flex flex-col m-7 rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixqx=UgujetFY6E&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <Link to="/" className="hover:underline">
                    Courses
                  </Link>
                </p>
                <Link to="/" className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900">
                    Python - intermediate Levels
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation.
                  </p>
                </Link>
              </div>
              <div className="mt-6 flex items-center">
              
                <div className="ml-3">
                  
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
