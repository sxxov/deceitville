import building_13_bin from './building-13.bin?url';
import walls_color_jpg from './walls_color.jpg?url';
import roof_color_jpg from './roof_color.jpg?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_emissive_strength",
		"KHR_materials_specular",
		"KHR_materials_ior"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "Building_13.001",
			"rotation": [
				0.5072171092033386,
				0.5072169303894043,
				0.4926772117614746,
				0.49267736077308655
			],
			"scale": [
				0.5894461274147034,
				0.5894460678100586,
				0.5894460678100586
			],
			"translation": [
				46.59064865112305,
				24.652767181396484,
				6.939111709594727
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"emissiveFactor": [
				1,
				1,
				1
			],
			"emissiveTexture": {
				"index": 0
			},
			"extensions": {
				"KHR_materials_emissive_strength": {
					"emissiveStrength": 4.299999713897705
				},
				"KHR_materials_specular": {
					"specularColorFactor": [
						0.42037705477998155,
						0.42037705477998155,
						0.42037705477998155
					]
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "walls_mat",
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 1
				},
				"metallicFactor": 0,
				"roughnessFactor": 0.968181848526001
			}
		},
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_specular": {
					"specularColorFactor": [
						0.366482544268505,
						0.366482544268505,
						0.366482544268505
					]
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "Roof_mat",
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 2
				},
				"metallicFactor": 0
			}
		}
	],
	"meshes": [
		{
			"name": "Cube.040",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"material": 0,
					"mode": 4
				},
				{
					"attributes": {
						"POSITION": 4,
						"NORMAL": 5,
						"TEXCOORD_0": 6
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 1,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 7,
					"material": 1,
					"mode": 4
				}
			]
		}
	],
	"textures": [
		{
			"sampler": 0,
			"source": 0
		},
		{
			"sampler": 0,
			"source": 0
		},
		{
			"sampler": 0,
			"source": 1
		}
	],
	"images": [
		{
			"mimeType": "image/jpeg",
			"name": "walls_color",
			"uri": walls_color_jpg
		},
		{
			"mimeType": "image/jpeg",
			"name": "roof_color",
			"uri": roof_color_jpg
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 5324,
			"max": [
				27.41994285583496,
				12.315008163452148,
				8.275611877441406
			],
			"min": [
				-11.525242805480957,
				-12.316429138183594,
				-10.562986373901367
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 5324,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 5324,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 18255,
			"type": "SCALAR"
		},
		{
			"componentType": 5126,
			"count": 3044,
			"max": [
				27.858076095581055,
				12.981542587280273,
				8.487546920776367
			],
			"min": [
				-2.7546048164367676,
				-12.982959747314453,
				-7.661478042602539
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 3044,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 3044,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 14118,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 36396,
			"byteOffset": 0
		},
		{
			"buffer": 0,
			"byteLength": 22931,
			"byteOffset": 36396
		}
	],
	"samplers": [
		{
			"magFilter": 9729,
			"minFilter": 9987
		}
	],
	"buffers": [
		{
			"byteLength": 59328,
			"uri": building_13_bin
		}
	]
}