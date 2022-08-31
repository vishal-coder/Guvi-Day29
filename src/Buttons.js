import Button from '@mui/material/Button';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import DeleteIcon from '@mui/icons-material/Delete';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import FlagSharpIcon from '@mui/icons-material/FlagSharp';
import DoneSharpIcon from '@mui/icons-material/DoneSharp';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';

export function Buttons() {
    return (
        <div className="body">
            <h1 className='buttonsHeader'>Buttons</h1>
            <div className="bodyWrapper">
                <div className="leftWrapper">
                    <div className="circleButtonsWrapper">
                        <div className="circleButtonsHeader">Circle Buttons</div>
                        <div className="circleButtonsBody">
                            <p>
                                Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!
                            </p>
                            <div className="iconsContainer">
                                <div>
                                    <div className="buttonCircle">.btn-circle</div>
                                    <IconsWrapper />
                                </div>
                                <div className="smallIconsWrapper">
                                    <div className="buttonCircle">.btn-circle .btn-sm</div>
                                    <IconsWrapper />
                                </div>
                                <div className="largeIconsWrapper">
                                    <div className="buttonCircle">.btn-circle .btn-lg</div>
                                    <IconsWrapper />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="brandButtonsWrapper">
                        <div className="brandButtonsHeader">Brand Buttons</div>
                        <div className="brandButtonsBody">
                            <p>
                                Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages.
                             </p>
                            <p>
                                You can create more custom buttons by adding a new color variable in the _variables.scss file and then using the Bootstrap button variant mixin to create a new style, as demonstrated in the _buttons.scss file.
                            </p>
                            <div className="buttonsWrapper">
                                <Button variant="contained" className="googleButton" startIcon={<GoogleIcon />}>.btn-google</Button>
                                <Button variant="contained" className="facebookButton" startIcon={<FacebookSharpIcon />}>.btn-facebook</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightWrapper">
                    <div className="splitButtonsHeader">Split Buttons with Icon</div>
                    <div className="splitButtonsBody">
                        <div>
                            <p>
                                Works with any button colors, just use the .btn-icon-split class and the markup in the examples below. The examples below also use the .text-white-50 helper class on the icons for additional styling, but it is not required.
                            </p>
                            <div className="buttonsWrapper">
                                <div className="primarySplitButton">
                                    <div className="splitIcon"><FlagSharpIcon /></div>
                                    <div className="primaryButtonText">Split Button Primary</div>
                                </div>
                                <div className="successSplitButton">
                                    <div className="splitIcon"><DoneSharpIcon /></div>
                                    <div className="successButtonText">Split Button Success</div>
                                </div>
                                <div className="infoSplitButton">
                                    <div className="splitIcon"><InfoIcon /></div>
                                    <div className="infoButtonText">Split Button Info</div>
                                </div>
                                <div className="warningSplitButton">
                                    <div className="splitIcon"><WarningIcon /></div>
                                    <div className="warningButtonText">Split Button Warning</div>
                                </div>
                                <div className="dangerSplitButton">
                                    <div className="splitIcon"><DeleteIcon /></div>
                                    <div className="dangerButtonText">Split Button Danger</div>
                                </div>
                                <div className="secondarySplitButton">
                                    <div className="splitIcon"><ArrowForwardSharpIcon /></div>
                                    <div className="secondaryButtonText">Split Button Secondary</div>
                                </div>
                                <div className="lightSplitButton">
                                    <div className="splitIcon"><ArrowForwardSharpIcon /></div>
                                    <div className="lightButtonText">Split Button Light</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Also works with small and large button classes!</p>
                            <div className="smallAndLargeButtons">
                                <div className="primarySplitButton primarySplitButtonSmall">
                                    <div className="splitIcon"><FlagSharpIcon /></div>
                                    <div className="primaryButtonText">Split Button Small</div>
                                </div>
                                <div className=" primarySplitButton primarySplitButtonLarge">
                                    <div className="splitIcon"><FlagSharpIcon /></div>
                                    <div className="primaryButtonText">Split Button Large</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
;

function IconsWrapper() {
    return (
        <div className="iconsWrapper">
            <FacebookRoundedIcon className="facebookIcon" />
            <CheckCircleIcon className="checkIcon"/>
            <div className="infoIconWrapper">
                <InfoIcon className="infoIcon"/>
            </div>
            <div className="warningIconWrapper">
                <WarningIcon className="warningIcon"/>
            </div>
            <div className="deleteIconWrapper">
                <DeleteIcon className="deleteIcon" />
            </div>
        </div>
    );
}
