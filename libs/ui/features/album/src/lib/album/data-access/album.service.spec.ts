import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AlbumService } from './album.service';

import { of } from 'rxjs';
import { ApiBaseService } from '@test-repo-na/ui/shared/services';
import { Photo } from '@test-repo-na/models';

describe('AlbumService', () => {
  let service: AlbumService;
  let apiMock: { get: jest.Mock<any, any, any> };

  beforeEach(() => {
    apiMock = {
      get: jest.fn(),
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: ApiBaseService, useValue: apiMock }],
    });

    service = TestBed.inject(AlbumService);
  });

  it('should call api.get with the correct URL and parameters', () => {
    const albumId = '1';
    const page = '1';
    const pageSize = '10';
    const expectedUrl = 'photos/album/1?page=1&pageSize=10';
    const expectedData: Photo[] = [
      {
        id: 1,
        albumId: 1,
        title: 'test',
        url: 'http://test.com',
        thumbnailUrl: 'http://test.com/thumb',
      },
    ];

    apiMock.get.mockReturnValue(of(expectedData));

    service.getAlbumPhotos(albumId, page, pageSize).subscribe((data) => {
      expect(data).toEqual(expectedData);
      expect(apiMock.get).toHaveBeenCalledWith(expectedUrl);
    });
  });
});
