import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <span class="copyright">Copyright &copy; Ubisoft website 2021</span>
                        </div>
                        <div class="col-md-4">
                            <ul class="list-inline social-buttons">
                                <li class="list-inline-item">
                                    <Link>
                                        <i class="fab fa-twitter"></i>
                                    </Link>
                                </li>
                                <li class="list-inline-item">
                                    <Link>
                                        <i class="fab fa-facebook-f"></i>
                                    </Link>
                                </li>
                                <li class="list-inline-item">
                                    <Link>
                                        <i class="fab fa-linkedin-in"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <ul class="list-inline quicklinks">
                                <li class="list-inline-item">
                                    <Link>Privacy Policy</Link>
                                </li>
                                <li class="list-inline-item">
                                    <Link>Terms of Use</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;