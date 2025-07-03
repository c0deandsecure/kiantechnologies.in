import React, { useState } from 'react';
import axios from 'axios';
import './Registationpage.css';

const RegistrationPage = () => {
  // Initial form state
  const initialState = {
    email: '',
    name: '',
    dob: '',
    state: '',
    college: '',
    qualification: '',
    domain: '',
    linkedIn: '',
    phone: '',
    guardian: '',
    gender: '',
    country: 'India',
    university: '',
    year: '',
    source: '',
    whatsapp: '',
    referral: '',
    cv: null
  };

  // State hooks
  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [cvPreview, setCvPreview] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'cv' && files && files[0]) {
      const file = files[0];
      
      // Create preview for PDF files
      if (file.type === 'application/pdf') {
        const reader = new FileReader();
        reader.onload = (e) => {
          setCvPreview(e.target.result);
        };
        reader.readAsDataURL(file);
      }
      
      setFormData(prev => ({
        ...prev,
        [name]: file
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formDataToSend = new FormData();

      // Append all form fields to FormData
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          formDataToSend.append(key, value);
        }
      });

      // Send POST request to backend using Axios
      const response = await axios.post('http://localhost:5000/api/registration', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle success
      setSubmitted(true);
      setFormData(initialState);
      setCvPreview(null);
      setTimeout(() => setSubmitted(false), 10000);
    } catch (err) {
      // Enhanced error handling
      if (err.response) {
        if (err.response.status === 413) {
          setError('File too large. Please upload a smaller file (max 5MB).');
        } else if (err.response.status === 415) {
          setError('Unsupported file type. Please upload a PDF file.');
        } else {
          setError(err.response.data?.message || `Server error: ${err.response.status}`);
        }
      } else if (err.request) {
        setError('Network error. Please check your internet connection.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Scroll to section
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="registration-app">
      <header className="app-header">
        <nav className="nav">
          <button 
            className={`nav-btn ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button 
            className={`nav-btn ${activeSection === 'signers' ? 'active' : ''}`}
            onClick={() => scrollToSection('signers')}
          >
            Signers
          </button>
          <button 
            className={`nav-btn ${activeSection === 'register' ? 'active' : ''}`}
            onClick={() => scrollToSection('register')}
          >
            Register
          </button>
        </nav>
      </header>

      <main>
        <section id="about" className="section about-section">
          <div className="container">
            <h1 className="section-title">Registration Form</h1>
            <h2 className="section-subtitle">We Provide The Best Internship in Bhilai, Chhattisgarh</h2>
            
            <div className="about-content">
              <p>
                Kian Technologies is at the forefront of cybersecurity education, dedicated to crafting the future leaders in digital security through comprehensive training programs. Based in Bhilai, India, we specialize in ethical hacking, penetration testing, and network security, providing a robust curriculum designed to equip students with the skills needed to excel in today's dynamic cyber landscape.
              </p>
              
              <p>
                Our institute stands out for its hands-on approach, where students engage directly with the latest tools and technologies under the guidance of seasoned industry professionals. We believe in bridging the gap between theoretical knowledge and practical application, ensuring that our students gain real-world experience and can effectively address contemporary security challenges.
              </p>
              
              <p>
                Our mission is to empower aspiring cybersecurity experts with cutting-edge skills and profound knowledge, enabling them to safeguard digital environments against emerging threats. Whether you're looking to enhance your current expertise or start a new career in cybersecurity, Kian Technologies offers a pathway to success with personalized attention and a commitment to excellence. Join us to transform your potential into performance and become a key player in the global cybersecurity landscape.
              </p>
              
              <h3 className="certificates-title">After completion of program the student will receive:</h3>
              <ul className="certificates-list">
                <li><i className="fas fa-certificate"></i> Program Completion Certificate issued by IIT+MICROSOFT</li>
                <li><i className="fas fa-certificate"></i> 3 month Co-Branded Internship Certificate</li>
                <li><i className="fas fa-certificate"></i> Letter of Recommendation based on performance</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="signers" className="section signers-section">
          <div className="container">
            <h2 className="section-title">Signers & Certificates</h2>
            
            <div className="signers-content">
              <p>
                Our certificates are co-signed by industry experts and academic leaders to ensure 
                they carry significant weight in the professional world.
              </p>
              
              <div className="signers-grid">
                <div className="signer-card">
                  <div className="signer-avatar">
                    <i className="fas fa-user-tie"></i>
                  </div>
                  <h3>Industry Expert</h3>
                  <p>Cybersecurity Specialist with 15+ years experience</p>
                </div>
                
                <div className="signer-card">
                  <div className="signer-avatar">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h3>Academic Leader</h3>
                  <p>Professor from IIT with specialization in Cybersecurity</p>
                </div>
                
                <div className="signer-card">
                  <div className="signer-avatar">
                    <i className="fas fa-building"></i>
                  </div>
                  <h3>Microsoft Representative</h3>
                  <p>Technology Partner endorsing the certification</p>
                </div>
              </div>
              
              <div className="certificate-showcase">
                <div className="certificate-card">
                  <div className="certificate-icon">
                    <i className="fas fa-award"></i>
                  </div>
                  <h3>Program Completion Certificate</h3>
                  <p>Issued by IIT and Microsoft</p>
                </div>
                
                <div className="certificate-card">
                  <div className="certificate-icon">
                    <i className="fas fa-medal"></i>
                  </div>
                  <h3>Internship Certificate</h3>
                  <p>3 month co-branded certificate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="register" className="section register-section">
          <div className="container">
            <h2 className="section-title">Internship Registration</h2>
            
            <form onSubmit={handleSubmit} className="registration-form">
              <div className="form-grid">
                {/* Row 1 */}
                <div className="form-group">
                  <label htmlFor="email">E-mail ID *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="name">Applicant Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    placeholder="In block letters"
                  />
                </div>
                
                {/* Row 2 */}
                <div className="form-group">
                  <label htmlFor="dob">Date of Birth *</label>
                  <input 
                    type="date" 
                    id="dob" 
                    name="dob" 
                    value={formData.dob}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="state">Select State *</label>
                  <select 
                    id="state" 
                    name="state" 
                    value={formData.state}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select State --</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                {/* Row 3 */}
                <div className="form-group">
                  <label htmlFor="college">College Name *</label>
                  <input 
                    type="text" 
                    id="college" 
                    name="college" 
                    value={formData.college}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="qualification">Highest Qualification *</label>
                  <select 
                    id="qualification" 
                    name="qualification" 
                    value={formData.qualification}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select Qualification --</option>
                    <option value="High School">High School</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="PhD">PhD</option>
                  </select>
                </div>
                
                {/* Row 4 */}
                <div className="form-group">
                  <label htmlFor="domain">Internship Domain *</label>
                  <select 
                    id="domain" 
                    name="domain" 
                    value={formData.domain}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select Domain --</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Ethical Hacking">Ethical Hacking</option>
                    <option value="Network Security">Network Security</option>
                    <option value="Penetration Testing">Penetration Testing</option>
                    <option value="Digital Forensics">Digital Forensics</option>
                    <option value="Web Development">Web development</option>
                    <option value="Mobile Development">Mobile development</option>
                    <option value="iOS Development">iOS development</option>
                    <option value="Frontend Development">Frontend development</option>
                    <option value="Backend Development">Backend development</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="linkedIn">Followed LinkedIn Page? *</label>
                  <select 
                    id="linkedIn" 
                    name="linkedIn" 
                    value={formData.linkedIn}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select --</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                
                {/* Row 5 */}
                <div className="form-group">
                  <label htmlFor="phone">Contact Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                    placeholder="With country code"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="guardian">Father/Guardian Name *</label>
                  <input 
                    type="text" 
                    id="guardian" 
                    name="guardian" 
                    value={formData.guardian}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                {/* Row 6 */}
                <div className="form-group">
                  <label htmlFor="gender">Gender *</label>
                  <select 
                    id="gender" 
                    name="gender" 
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select Gender --</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="country">Country *</label>
                  <input 
                    type="text" 
                    id="country" 
                    name="country" 
                    value={formData.country}
                    onChange={handleChange}
                    readOnly
                  />
                </div>
                
                {/* Row 7 */}
                <div className="form-group">
                  <label htmlFor="university">University Name *</label>
                  <input 
                    type="text" 
                    id="university" 
                    name="university" 
                    value={formData.university}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="year">Current Course Year *</label>
                  <select 
                    id="year" 
                    name="year" 
                    value={formData.year}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select Year --</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="Graduated">Graduated</option>
                  </select>
                </div>
                
                {/* Row 8 */}
                <div className="form-group">
                  <label htmlFor="source">How did you hear about us? *</label>
                  <select 
                    id="source" 
                    name="source" 
                    value={formData.source}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select Source --</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Friend/Family">Friend/Family</option>
                    <option value="College">College</option>
                    <option value="Advertisement">Advertisement</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="whatsapp">Followed WhatsApp Page? *</label>
                  <select 
                    id="whatsapp" 
                    name="whatsapp" 
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select --</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                
                {/* Row 9 */}
                <div className="form-group">
                  <label htmlFor="referral">Referral Code</label>
                  <input 
                    type="text" 
                    id="referral" 
                    name="referral" 
                    value={formData.referral}
                    onChange={handleChange}
                    placeholder="If any"
                  />
                </div>
                
                <div className="form-group file-upload">
                  <label htmlFor="cv">Upload CV *</label>
                  <div className="file-input-container">
                    <input 
                      type="file" 
                      id="cv" 
                      name="cv" 
                      onChange={handleChange}
                      className="file-input"
                      accept=".pdf,application/pdf"
                      required
                    />
                    <label htmlFor="cv" className="file-label">
                      {formData.cv ? formData.cv.name : 'Choose File'}
                    </label>
                    <span className="file-status">
                      {formData.cv ? '' : 'No file chosen'}
                      <p>Only PDF required (max 5MB)</p>
                    </span>
                  </div>
                  
                  {cvPreview && (
                    <div className="cv-preview">
                      <p>PDF Preview:</p>
                      <div className="preview-container">
                        <iframe 
                          src={cvPreview} 
                          title="CV Preview"
                          className="pdf-preview"
                        />
                        <a 
                          href={cvPreview} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="view-full"
                        >
                          View Full PDF
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="form-note">
                <p><i className="fas fa-exclamation-circle"></i> Note: Please don't apply multiple times for the same domain as your application will be considered invalid.</p>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner"></span> Submitting...
                  </>
                ) : (
                  <>
                    Submit Registration <i className="fas fa-paper-plane"></i>
                  </>
                )}
              </button>
            </form>
            
            {submitted && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <h3>Registration Successful!</h3>
                <p>Your registration has been submitted successfully. You will receive a confirmation email shortly.</p>
              </div>
            )}

            {error && (
              <div className="error-message">
                <i className="fas fa-exclamation-circle"></i>
                <h3>Registration Error</h3>
                <p>{error}</p>
                <button 
                  className="retry-btn"
                  onClick={() => setError(null)}
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default RegistrationPage;