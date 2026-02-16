import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-team',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './team.html',
    styleUrl: './team.scss',
})
export class Team {
    managementTeam = [
        {
            name: 'Executive Leadership',
            members: [
                { name: 'Arshdeep Singh', role: 'Managing Director', icon: '👤' },
                { name: 'Senior Management', role: 'Operations & Strategy', icon: '👥' }
            ]
        }
    ];

    departments = [
        {
            name: 'Sales & Client Relations',
            members: [
                { name: 'Corporate Sales', handle: 'sales@theelectronicsbond.com', role: 'B2B Solutions' },
                { name: 'Hospitality Desk', handle: 'hospitality@theelectronicsbond.com', role: 'Hotels & Resorts' },
                { name: 'Government Tenders', handle: 'govt@theelectronicsbond.com', role: 'Public Sector' }
            ]
        },
        {
            name: 'Technical & Support',
            members: [
                { name: 'AV Integration Team', handle: 'support@theelectronicsbond.com', role: 'Installation & Setup' },
                { name: 'After Sales Service', handle: 'service@theelectronicsbond.com', role: 'Maintenance & Warranty' }
            ]
        },
        {
            name: 'Accounts & Finance',
            members: [
                { name: 'Billing Department', handle: 'accounts@theelectronicsbond.com', role: 'Invoices & Payments' }
            ]
        }
    ];
}
