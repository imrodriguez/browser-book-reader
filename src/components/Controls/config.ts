import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import DownloadIcon from '@mui/icons-material/Download';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { Action, State } from '../../context/types';

interface configElement {
    icon: any;
    visible?: boolean;
    action?: Action; 
}

export const generateConfig = (state:State):configElement[] => {
    return [
        {
            icon: ChevronLeftIcon,
            visible: state.mode === 'divided',
            action: {
                type: 'previous'
            },
        },
        {
            icon: BookmarkAddIcon,
            visible: state.onBookMark !== undefined,
            action: {
                type: 'bookmark'
            }
        },
        {
            icon: ZoomOutMapIcon,
            action: {
                type: 'fullscreen'
            }
        },
        {
            icon: DownloadIcon,
            visible: state.onDownload !== undefined,
            action: {
                type: 'download'
            }
        },
        {
            icon: Brightness6Icon,
            action: {
                type: 'toggleContrast'
            }
        },
        {
            icon: NavigateNextIcon,
            visible: state.mode === 'divided',
            action: {
                type: 'next'
            }
        }
    ];
};