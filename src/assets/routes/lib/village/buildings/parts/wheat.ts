import wheat_bin from './wheat.bin?url';
import folatlas_png from './folatlas.png?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
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
			"name": "wheat",
			"scale": [
				0.5894461274147034,
				0.5894461274147034,
				0.5894461274147034
			],
			"translation": [
				-21.416467666625977,
				7.726564407348633,
				-49.77619934082031
			]
		}
	],
	"materials": [
		{
			"alphaCutoff": 0.5,
			"alphaMode": "MASK",
			"doubleSided": true,
			"extensions": {
				"KHR_materials_specular": {
					"specularColorFactor": [
						0,
						0,
						0
					]
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "leaves",
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 0
				},
				"metallicFactor": 0
			}
		}
	],
	"meshes": [
		{
			"name": "Plane.007",
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
				}
			]
		}
	],
	"textures": [
		{
			"sampler": 0,
			"source": 0
		}
	],
	"images": [
		{
			"mimeType": "image/png",
			"name": "folatlas",
			"uri": folatlas_png
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 28,
			"max": [
				1.3208730220794678,
				1.3868299722671509,
				0.8763307332992554
			],
			"min": [
				-1.2292745113372803,
				-1.8232489824295044,
				-3.861534595489502
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 28,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 28,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 54,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 459,
			"byteOffset": 0
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
			"byteLength": 460,
			"uri": wheat_bin
		}
	]
}