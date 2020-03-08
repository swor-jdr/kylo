import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { IndexComponent } from './views/index/index.component';
import { ForumComponent } from './views/forum/forum.component';
import { PostingComponent } from './views/posting/posting.component';
import { TopicComponent } from './views/topic/topic.component';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: '/:slug',
        component: ForumComponent
    },
    {
        path: '/:slug/creer',
        component: PostingComponent
    },
    {
        path: '/:slug/:topic',
        component: TopicComponent
    },
    {
        path: '/:slug/:topic/repondre',
        component: PostingComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
