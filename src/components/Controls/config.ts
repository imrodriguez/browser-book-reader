import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import DownloadIcon from '@mui/icons-material/Download';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { Action, State } from '../../context/types';

interface configElement {
    icon: any;
    role: string;
    visible?: boolean;
    action?: Action; 
}

export const generateConfig = (state:State):configElement[] => {
    return [
        {
            icon: ChevronLeftIcon,
            role: 'previous',
            visible: state.mode === 'divided',
            action: {
                type: 'previous'
            },
        },
        {
            icon: BookmarkAddIcon,
            role: 'bookmark',
            visible: state.onBookMark !== undefined,
            action: {
                type: 'bookmark'
            }
        },
        {
            icon: ZoomOutMapIcon,
            role: 'fullscreen',
            action: {
                type: 'fullscreen'
            }
        },
        {
            icon: DownloadIcon,
            role: 'download',
            visible: state.onDownload !== undefined,
            action: {
                type: 'download'
            }
        },
        {
            icon: Brightness6Icon,
            role: 'invert',
            action: {
                type: 'toggleContrast'
            }
        },
        {
            icon: NavigateNextIcon,
            role: 'next',
            visible: state.mode === 'divided',
            action: {
                type: 'next'
            }
        }
    ];
};