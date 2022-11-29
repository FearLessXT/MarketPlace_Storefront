import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { GetCollectionQuery } from '../../../common/generated-types';
import { AssetPreviewPipe } from '../../pipes/asset-preview.pipe';

@Component({
    selector: 'vsf-collection-card',
    templateUrl: './collection-card.component.html',
    // styleUrls: ['./collection-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionCardComponent implements OnChanges {
    @Input() collection: NonNullable<GetCollectionQuery['collection']>;
    backgroundImage: SafeStyle;

    constructor(private sanitizer: DomSanitizer) {}

    ngOnChanges() {
        if (this.collection.featuredAsset) {
            const assetPreviewPipe = new AssetPreviewPipe();
            this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle(
                `url('${assetPreviewPipe.transform(this.collection.featuredAsset, 400, 150)}')`,
            );
        }
    }

}
