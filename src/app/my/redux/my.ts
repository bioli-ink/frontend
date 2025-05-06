import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SocialLink } from '@/app/types/my';
import { ModuleStatus, UserModule } from '@/app/types/my/module';

export enum SocialLinksPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}

interface UserModules {
  id: string;
  modules: UserModule[];
}

interface MyStore {
  isLoading: boolean;

  avatar: string;
  username: string;
  bio: string;
  socialLinks: SocialLink[];
  socialLinksPosition?: SocialLinksPosition; // TODO
  userModules: UserModules;
  displayedUserModules: UserModule[]; // 不含已删除的模块
}

const initialState: MyStore = {
  isLoading: true,

  avatar: '',
  username: '',
  bio: '',
  socialLinks: [],
  socialLinksPosition: SocialLinksPosition.TOP,
  userModules: {
    id: '',
    modules: [],
  },
  displayedUserModules: [],
}

export const mySlice = createSlice({
  name: 'my',
  initialState,
  reducers: {
    updateIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    updateAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload;
    },
    updateUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    updateBio: (state, action: PayloadAction<string>) => {
      state.bio = action.payload;
    },
    updateSocialLinks: (state, action: PayloadAction<SocialLink[]>) => {
      state.socialLinks = action.payload;
    },
    updateSocialLinksPosition: (state, action: PayloadAction<SocialLinksPosition>) => {
      state.socialLinksPosition = action.payload;
    },
    updateUserModule: (state, action: PayloadAction<{
      id?: string;
      item?: Partial<UserModule>;
      index?: number;
      action?: 'add' | 'update' | 'delete';
      list?: UserModule[]
    }>) => {
      // 改 id
      if (action.payload.id) {
        state.userModules.id = action.payload.id;
      }

      // 全量更新 list
      if (Array.isArray(action.payload.list)) {
        state.userModules.modules = action.payload.list;
        state.displayedUserModules = action.payload.list.filter(module => module.status !== ModuleStatus.DELETED);
      }

      // 对某一项的增删改
      if (action.payload.action) {
        switch (action.payload.action) {
          case 'add':
            state.userModules.modules.unshift(action.payload.item as UserModule);
            break;
          case 'update':
            if (action.payload.index !== undefined) {
              const newUserModule = {
                ...state.userModules.modules[action.payload.index],
                ...action.payload.item,
              };
  
              state.userModules.modules.splice(action.payload.index, 1, newUserModule);
            }
            break;
          case 'delete':
            if (action.payload.index !== undefined) {
              state.userModules.modules.splice(action.payload.index, 1);
            }
            break;
          default:
            break;
        }

        state.displayedUserModules = state.userModules.modules.filter(module => module.status !== ModuleStatus.DELETED);
      }
    },
    // TODO
    // resetUserModules: (state, action: PayloadAction<UserModule[]>) => {
    //   state.userModules.modules = action.payload;
    // },
  },
});

export default mySlice.reducer;
export const {
  updateIsLoading,
  updateAvatar,
  updateUsername,
  updateBio,
  updateSocialLinks,
  updateSocialLinksPosition,
  updateUserModule,
  // resetUserModules,
} = mySlice.actions;
