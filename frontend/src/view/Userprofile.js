import './userprofile.css'
import { useState } from 'react';
import {Link ,useHistory } from 'react-router-dom';

const Profile = () => {
	const history = useHistory();

	const data =JSON.parse(localStorage.getItem('user-info'));
	console.log("Hello ", data.name)

	function logOut()
    {
        localStorage.clear();
        history.push('/register');
    }
    return (
        <div>
           
		<div class="container" id="container">
			<h1 class="mb-5">PERSONAL DATA</h1>
			<div class="bg-white shadow rounded-lg d-block d-sm-flex">
				<div class="profile-tab-nav border-right">
					<div class="p-4">
						<div class="img-circle text-center mb-3">
							<img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" class="img-circle" class="shadow"/>
						</div>
						<h4 class="text-center">{data.name}</h4>
					</div>
					<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
						<a class="nav-link active" id="account-tab" data-toggle="pill" href="#account" role="tab" aria-controls="account" aria-selected="true">
							<i class="fas fa-cog text-center mr-1"></i>
							Account Setting
						</a>
						<a class="nav-link" id="password-tab" data-toggle="pill" href="#password" role="tab" aria-controls="password" aria-selected="false">
							<i class="fas fa-map-marker-alt text-center mr-1"></i>
							Shopping Address
						</a>
						<Link class="nav-link" id="security-tab" data-toggle="pill" to="/success" role="tab" aria-controls="security" aria-selected="false">
							<i class="fas fa-shopping-cart text-center mr-1"></i> 
							My Order
						</Link>
						<a class="nav-link" id="application-tab" data-toggle="pill" href="#application" role="tab" aria-controls="application" aria-selected="false">
							<i class="fas fa-heart text-center mr-1"></i>
							My Favorite
						</a>
						<a class="nav-link" id="notification-tab" data-toggle="pill" href="#notification" role="tab" aria-controls="notification" aria-selected="false"> 
							<i class="fas fa-weight-hanging text-center mr-1"></i>
							My Measures
						</a>
						<a class="nav-link" onClick={logOut} id="logout-tab" data-toggle="pill" href="#logout" role="tab" aria-controls="logout" aria-selected="false">
							<i class="fas fa-sign-out-alt  text-center mr-1"></i>
							Log Out
						</a>
					</div>
				</div>
				<div class="tab-content p-4 p-md-5" id="v-pills-tabContent">
					<div class="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
						<h3 class="mb-4 text-center">PERSONAL DATA</h3>
						<div class="row">
							<div class="col-md-12 ">
								<div class="form-group">
								  	<label>First Name</label>
								  	<input type="text" class="form-control" value={data.name}/>
								</div>
							</div>						
				
							{/* <div class="col-md-12">
								<div class="form-group">
								  	<label>Phone number</label>
								  	<input type="text" class="form-control" value="Number"/>
								</div>
							</div> */}
							<div class="col-md-12">
								<div class="form-group">
								  	<label>Date of Birth</label>
								  	<input type="date" class="form-control" value="Kiran Workspace"/>
								</div>
							</div>
			
						</div>
						<div>
							<button class="btn btn-primary">Save Change</button>
						
						</div>
					</div>
					
				
				
				</div>
			</div>
			<br />
		</div>
        </div>


    )
}

export default Profile