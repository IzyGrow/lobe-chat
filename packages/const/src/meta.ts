import { MetaData } from '@lobechat/types';

import { BRANDING_LOGO_URL } from './branding';

export const DEFAULT_AVATAR = '🤖';
export const DEFAULT_USER_AVATAR = '😀';
export const DEFAULT_SUPERVISOR_AVATAR = '🎙️';
export const DEFAULT_SUPERVISOR_ID = 'supervisor';
export const DEFAULT_BACKGROUND_COLOR = 'rgba(0,0,0,0)';
export const DEFAULT_AGENT_META: MetaData = {
    avatar: '🏢',
    description: 'A+A 2025 fuarı hakkında uzman asistan. İş güvenliği ve sağlığı konularında size yardımcı olur.',
    title: 'A+A 2025 Fuarı Asistanı',
};
export const DEFAULT_INBOX_AVATAR = BRANDING_LOGO_URL || '🤯';
export const DEFAULT_USER_AVATAR_URL = BRANDING_LOGO_URL || '/icons/icon-192x192.png';
