// tslint:disable:max-line-length

import { registerIcons } from '@uifabric/styling/lib/index';

export function initializeIcons(baseUrl: string = ''): void {
  registerIcons({
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2IconSet-5"`,
      src: `url('data:application/octet-stream;base64,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') format('woff')`,
    },
    icons: {
      'BoxLogo': '\uED75',
      'DelveLogoInverse': '\uED76',
      'DropboxLogo': '\uED77',
      'ExchangeLogoInverse': '\uED78',
      'LyncLogo': '\uED79',
      'OfficeVideoLogoInverse': '\uED7A',
      'ParatureLogo': '\uED7B',
      'SocialListeningLogo': '\uED7C',
      'VisioLogoInverse': '\uED7D',
      'Balloons': '\uED7E',
      'Cat': '\uED7F',
      'MailAlert': '\uED80',
      'MailCheck': '\uED81',
      'MailLowImportance': '\uED82',
      'MailPause': '\uED83',
      'MailRepeat': '\uED84',
      'SecurityGroup': '\uED85',
      'Table': '\uED86',
      'VoicemailForward': '\uED87',
      'VoicemailReply': '\uED88',
      'Waffle': '\uED89',
      'RemoveEvent': '\uED8A',
      'EventInfo': '\uED8B',
      'ForwardEvent': '\uED8C',
      'WipePhone': '\uED8D',
      'AddOnlineMeeting': '\uED8E',
      'JoinOnlineMeeting': '\uED8F',
      'RemoveLink': '\uED90',
      'PeopleBlock': '\uED91',
      'PeopleRepeat': '\uED92',
      'PeopleAlert': '\uED93',
      'PeoplePause': '\uED94',
      'TransferCall': '\uED95',
      'AddPhone': '\uED96',
      'UnknownCall': '\uED97',
      'NoteReply': '\uED98',
      'NoteForward': '\uED99',
      'NotePinned': '\uED9A',
      'RemoveOccurrence': '\uED9B',
      'Timeline': '\uED9C',
      'EditNote': '\uED9D',
      'CircleHalfFull': '\uED9E',
      'Room': '\uED9F',
      'Unsubscribe': '\uEDA0',
      'Subscribe': '\uEDA1',
      'RecurringTask': '\uEDB2',
      'TaskManager': '\uEDB7',
      'TaskManagerMirrored': '\uEDB8',
      'Combine': '\uEDBB',
      'Split': '\uEDBC',
      'DoubleChevronUp': '\uEDBD',
      'DoubleChevronLeft': '\uEDBE',
      'DoubleChevronRight': '\uEDBF',
      'TextBox': '\uEDC2',
      'TextField': '\uEDC3',
      'NumberField': '\uEDC4',
      'Dropdown': '\uEDC5',
      'BookingsLogo': '\uEDC7',
      'ClassNotebookLogoInverse': '\uEDC8',
      'DelveAnalyticsLogo': '\uEDCA',
      'DocsLogoInverse': '\uEDCB',
      'Dynamics365Logo': '\uEDCC',
      'DynamicSMBLogo': '\uEDCD',
      'OfficeAssistantLogo': '\uEDCE',
      'OfficeStoreLogo': '\uEDCF',
      'OneNoteEduLogoInverse': '\uEDD0',
      'PlannerLogo': '\uEDD1',
      'PowerApps': '\uEDD2',
      'Suitcase': '\uEDD3',
      'ProjectLogoInverse': '\uEDD4',
      'CaretLeft8': '\uEDD5',
      'CaretRight8': '\uEDD6',
      'CaretUp8': '\uEDD7',
      'CaretDown8': '\uEDD8',
      'CaretLeftSolid8': '\uEDD9',
      'CaretRightSolid8': '\uEDDA',
      'CaretUpSolid8': '\uEDDB',
      'CaretDownSolid8': '\uEDDC',
      'ClearFormatting': '\uEDDD',
      'Superscript': '\uEDDE',
      'Subscript': '\uEDDF',
      'Strikethrough': '\uEDE0',
      'Export': '\uEDE1',
      'ExportMirrored': '\uEDE2',
      'SingleBookmark': '\uEDFF',
      'DoubleChevronDown': '\uEE04',
      'ReplyAll': '\uEE0A',
      'GoogleDriveLogo': '\uEE0B',
      'Questionnaire': '\uEE19',
      'ReplyMirrored': '\uEE35',
      'ReplyAllMirrored': '\uEE36',
      'AddGroup': '\uEE3D',
      'QuestionnaireMirrored': '\uEE4B',
      'TemporaryUser': '\uEE58',
      'CaretSolid16': '\uEE62',
      'GroupedDescending': '\uEE66',
      'GroupedAscending': '\uEE67',
      'AwayStatus': '\uEE6A',
      'MyMoviesTV': '\uEE6C',
      'SyncToPC': '\uEE6E'
    }
  });
}
